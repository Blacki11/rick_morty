const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(userData) {
  const errors = {};
  if (!userData.username) {
    errors.username = "el nombre de usuario no puede estar vacío";
  }else if (!regexEmail.test(userData.username)) {
    errors.username = "el nombre de usuario tiene que ser un email";
  }else if(userData.username.length > 35){
    errors.username = "el nombre de usuario no puede tener más de 35 caracteres";
  }
  if(userData.password.length > 10 ){
    errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
  }else if(userData.password.length < 6){
    errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
  }else if (!userData.password.match(/[0-9]/)) {
    errors.password = "la contraseña tiene que tener al menos un numero";
  }else if (!userData.password) {
    errors.password = "la contraseña no puede estar vacia";
  }
  return errors;
}