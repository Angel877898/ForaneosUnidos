<?php
// Conexión
$servidor = '127.0.0.1';
$usuario = 'root';
$password = '';
$basededatos = 'blog';
$db = mysqli_connect($servidor, $usuario, $password, $basededatos);

mysqli_query($db, "SET NAMES 'utf8'");

// Iniciar la sesión
if(!isset($_SESSION)){
	session_start();
}