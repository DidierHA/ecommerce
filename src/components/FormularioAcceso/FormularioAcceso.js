import { useState } from 'react';

import {
  signInWithGooglePopup,
  crearDocumentoUsuarios,
  signInWithEmailPasswordForFirestore,
} from './../../utils/firebase/firebase';

import { errorAutenticacion } from './../../utils/sweetalert2/sweetalert2';

import Input from './../../layouts/Input/Input';
import Button from './../../layouts/Button/Button';

const FormularioAcceso = () => {
  const datosFormulario = {
    correo: '',
    contrasena: '',
  };

  const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
  const { correo, contrasena } = camposFormulario;

  const handleOnChange = (evento) => {
    const { name, value } = evento.target;
    setCamposFormulario({ ...camposFormulario, [name]: value });
  };

  const handleOnSubmit = async (evento) => {
    evento.preventDefault();

    try {
      await signInWithEmailPasswordForFirestore(correo, contrasena);
    } catch (error) {
      errorAutenticacion(error.code);
      console.error(error.code);
    }
  };

  const loguear = async () => {
    const { user } = await signInWithGooglePopup();
    crearDocumentoUsuarios(user);
  };

  return (
    <div style={{ width: '30%' }}>
      <h2 style={{ marginBottom: '30px' }}>Acceder</h2>
      <form onSubmit={handleOnSubmit}>
        <Input
          label={'Correo:'}
          type={'email'}
          onChange={handleOnChange}
          name={'correo'}
          value={correo}
          required={true}
        />
        <Input
          label={'Contraseña:'}
          type={'password'}
          onChange={handleOnChange}
          name={'contrasena'}
          value={contrasena}
          required={true}
        />
        <div style={{ marginTop: '20px' }}>
          <Button type={'submit'} text={'Acceder'} />
          <Button onClick={loguear} text={'Acceder con cuenta de Google'} />
        </div>
      </form>
    </div>
  );
};

export default FormularioAcceso;
