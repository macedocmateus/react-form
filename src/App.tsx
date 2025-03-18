import "./App.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
    name: string;
    date: string;
    subject: string;
    message: string;
};

const schema = yup.object({});

export default function App() {
    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            name: "",
            date: "",
            subject: "",
            message: "",
        },

        resolver: yupResolver(schema),
    });

    function onSubmit(data: FormData) {
        console.log(data);
    }

    return (
        <div>
            <h1>Evento</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <input
                            type="text"
                            placeholder="Nome do evento"
                            {...field}
                        />
                    )}
                ></Controller>

                <span className="error">Nome é obrigatório</span>

                <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                        <input
                            type="date"
                            placeholder="Nome do evento"
                            lang="pt-BR"
                            {...field}
                        />
                    )}
                ></Controller>

                <Controller
                    control={control}
                    name="subject"
                    render={({ field }) => (
                        <select {...field}>
                            <option value="" disabled>
                                Selecione...
                            </option>

                            <option value="technology">React</option>
                            <option value="entertainment">Node.js</option>
                            <option value="business">Javascript</option>
                            <option value="business">Typescript</option>
                        </select>
                    )}
                ></Controller>

                <Controller
                    control={control}
                    name="message"
                    render={({ field }) => (
                        <textarea placeholder="Descrição" rows={4} {...field} />
                    )}
                ></Controller>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
