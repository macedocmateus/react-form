import "./App.css";

import { Controller, useForm } from "react-hook-form";

export default function App() {
    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            name: "",
            date: "",
        },
    });

    function onSubmit(data: FormData) {
        console.log(data);
    }

    type FormData = {
        name: string;
        date: string;
    };

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

                <select defaultValue="">
                    <option value="" disabled>
                        Selecione...
                    </option>

                    <option value="technology">React</option>
                    <option value="entertainment">Node.js</option>
                    <option value="business">Javascript</option>
                    <option value="business">Typescript</option>
                </select>

                <textarea placeholder="Descrição" rows={4} />

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
