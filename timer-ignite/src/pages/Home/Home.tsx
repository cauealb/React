import { Pause, Play } from "phosphor-react";
import { PrincipalStyled, StartStyledButton, StopStyledButton } from "./Home.style";
import { FormProvider, useForm } from "react-hook-form";
import  * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Countdown } from "./components/CountDown/Countdown";
import { InputForm } from "./components/InputForm/InputForm";
import { useContext } from "react";
import { CycleContext } from "../../Components/ContextAPI/ContextAPI";


const newCycleValidating = zod.object({
    task: zod.string().min(1, 'Informe a tarefa corretamente'),
    minute: zod.number().min(1, 'Valor menor que 5').max(60, 'Valor maior que 60'),
})  

type NewFormCycle = zod.infer<typeof newCycleValidating>

export function Home() {

    const { SubmitfromServer, isActive, StopCycle,  } = useContext(CycleContext)

    const NewForm = useForm<NewFormCycle>({
        resolver: zodResolver(newCycleValidating),
        defaultValues: {
            task: '',
            minute: 0
        }
    })

    const { handleSubmit, /*reset */ watch} = NewForm
    
    const task = watch('task')
    const AsInvalid = !task

    return (
            <>
                    <PrincipalStyled onSubmit={handleSubmit(SubmitfromServer)}>

                        <FormProvider {...NewForm}>
                            <InputForm />
                        </FormProvider>
                        <Countdown />

                        {isActive ? (
                            <StopStyledButton onClick={StopCycle} type="button">
                                <Pause size={24}/>
                                Interromper
                            </StopStyledButton>
                        ) : (
                            <StartStyledButton type="submit" disabled={AsInvalid}>
                                <Play size={24}/>
                                Começar
                            </StartStyledButton>
                        )}
                    </PrincipalStyled>
            </>
    ) 
}