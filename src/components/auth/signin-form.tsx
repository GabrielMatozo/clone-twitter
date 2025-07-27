"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignInForm = () => {
    const router = useRouter();
    const [emailField, setEmailFField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    const handleEnterButton = () => {
        router.replace("/home");
    }

    return (
        <>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={(e) => setEmailFField(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
            />

            <button onClick={handleEnterButton}>Entrar</button>
        </>
    );
};