import { ILoginForm } from "@pages/login/components/login-form/interfaces/login-form.interface";

export const loginFormConstants: ILoginForm = {
    errorEmailRequired: "Email es requerido.",
    errorEmailFormat: "El formato del email es incorrecto.",
    errorPasswordRequired: "Contraseña es requerida.",
    errorPasswordMinLength: "Contraseña debe de tener al menos 5 caracteres.",
    reminderText: "Recordar",
    submitText: "Acceder",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Contraseña",
}