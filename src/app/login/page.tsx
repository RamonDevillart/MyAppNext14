'use client'

import Button from "@/components/button/Buton";
import InputField from "@/components/Input/Input";
import { useState } from "react"

import styles from '../../styles/Login.module.css'

export default function LoginPage() {
    
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
    
    return (
        <>
        <div className="m-5 flex justify-end">
            <div className={styles.container} style={{width: "30%"}}>
                <div className="">
                    <InputField labelText="Usuário" state={user} setState={setUser} />
                </div>
                <div>
                <InputField labelText="Senha" state={password} setState={setPassword} />
                </div>
                <div>
                    <Button label='Entrar' />
                </div>
            </div>
        </div>
        </>
    )
}