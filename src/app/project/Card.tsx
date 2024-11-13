'use client';
import Image from "next/image"
import { useState } from "react";

type Props {
    num: number
}

export const Card: React.FC<Props>  = ({ num }) => {
    const [imgsrc, setImgsrc] = useState("/canvas.png");
    const [title, setTitle] = useState("Уклад");
    const [context, setContext] = useState('Проект для Дома Культуры "Берёзка"');

    fetch("/api/project")
        .then(response => response.json())
        .then(data => {
            setImgsrc(data[num].img)
            setTitle(data[num].title)
            setContext(data[num].context)
        })

    return (
        <a href="https://github.com/SwarmGost404/uklad.spb.git">
            <div className="card">
                <img
                    src={imgsrc}
                    width={200}
                    height={120}
                    alt="img title card"
                />
                <div className="card-title">{title}</div>
                <div className="card-content">
                    <p>
                        {context}
                    </p>
                </div>
            </div>
        </a>
    )
};