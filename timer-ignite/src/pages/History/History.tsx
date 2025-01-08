import { useContext } from "react";
import { DivTable, Header, TableStyle, Status } from "./History.style";
import { CycleContext } from "../../Components/ContextAPI/ContextAPI";

export function History() {

    const { cycles } = useContext(CycleContext)

    return (
        <>
            <Header>Meu histório</Header>

            <DivTable>
                <TableStyle>
                    <thead>
                        <th>Tarefa</th>  
                        <th>Duração</th>  
                        <th>Início</th>  
                        <th>Status</th>  
                    </thead>

                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="yellow">Em andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="red">Interrompido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="red">Interrompido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>
                                <Status colorStatus="green">Concluído</Status>
                            </td>
                        </tr>
                        
                    </tbody>  
                </TableStyle> 
            </DivTable> 
        </>
    ) 
}