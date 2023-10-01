// Definir una función que toma un nombre de usuario y una contraseña
function validar_usuario(usuario, contraseña) {
    // Definir un nombre de usuario y una contraseña válidos
    var usuario_valido = "admin";
    var contraseña_valida = "1234";
    // Comparar el nombre de usuario y la contraseña con los valores válidos
    if (usuario == usuario_valido && contraseña == contraseña_valida) {
      // Devolver verdadero si el usuario es válido
      return true;
    } else {
      // Devolver falso si el usuario es inválido
      return false;
    }
  }
  
  // Ejemplo de uso de la función de validación de usuario
  var usuario = prompt("Ingrese su nombre de usuario");
  var contraseña = prompt("Ingrese su contraseña");
  var resultado = validar_usuario(usuario, contraseña);
  if (resultado) {
    alert("Bienvenido " + usuario);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
  