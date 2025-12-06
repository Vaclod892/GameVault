import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreUsuario: props.usuario.nombreUsuario,
            email: props.usuario.email,
            contrasena: props.usuario.contrasena,
            foto: props.usuario.foto
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSeleccionFoto = (foto) => {
        this.setState({ foto });
    }

    // V.V: Misma función auxiliar
    contieneEmojis(texto) {
        const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
        return regex.test(texto);
    }

    onUpdate = (e) => {
        e.preventDefault();
        const { nombreUsuario, email, contrasena } = this.state;

        // V.V: Validación antes de enviar
        if (this.contieneEmojis(nombreUsuario) || this.contieneEmojis(email) || this.contieneEmojis(contrasena)) {
            alert("🚫 No se permiten emojis en los datos de perfil.");
            return;
        }

        this.props.handleUpdateUsuario(this.state);
    }

    onDelete = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")) {
            this.props.handleDeleteUsuario(this.props.usuario.ID_usuario);
        }
    }

    render() {
        const avatares = ["/img/silla-default.jpg", "/img/auto-default.jpg", "/img/pelota-default.jpg"];

        return (
            <div className="perfil-container">
                <div className="perfil-card">
                    <h2>Mi Perfil</h2>

                    <form onSubmit={this.onUpdate} className="perfil-form">

                        <div className="perfil-avatar-section">
                            <img src={this.state.foto} alt="Avatar actual" className="perfil-avatar-preview" />
                            <div className="seleccion-avatares-mini">
                                {avatares.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        className={`avatar-mini ${this.state.foto === img ? 'selected' : ''}`}
                                        onClick={() => this.handleSeleccionFoto(img)}
                                        alt="opcion"
                                    />
                                ))}
                            </div>
                        </div>

                        <label>Nombre de Usuario</label>
                        <input type="text" name="nombreUsuario" value={this.state.nombreUsuario} onChange={this.handleChange} required />

                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                        <label>Contraseña</label>
                        <input type="text" name="contrasena" value={this.state.contrasena} onChange={this.handleChange} required />

                        <div className="perfil-actions">
                            <button type="submit" className="btn-guardar">Guardar Cambios</button>
                            <button type="button" className="btn-eliminar" onClick={this.onDelete}>Eliminar Cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Perfil;