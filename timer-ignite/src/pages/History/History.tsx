import { useContext } from "react";
import { DivTable, Header, TableStyle, Status } from "./History.style";
import { CycleContext } from "../../Components/ContextAPI/ContextAPI";
import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

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
                        { cycles.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.taskName}</td>
                                    <td>{item.minute}</td>
                                    <td>{formatDistanceToNow(item.start, {
                                        addSuffix: true,
                                        locale: ptBR    
                                    })}</td>
                                    <td>
                                        {item.stopDate && 
                                            (<Status colorStatus="red">Interrompido</Status>)
                                        }

                                        {item.finishDate && 
                                            (<Status colorStatus="green">Concluído</Status>)
                                        }

                                        {(!item.stopDate) && (!item.finishDate) && 
                                            (<Status colorStatus="yellow">Em andamento</Status>)
                                        }
                                    </td>
                                </tr> 
                            )
                        }) }
                    </tbody>  
                </TableStyle> 
            </DivTable> 
        </>
    ) 
}