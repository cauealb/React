import { DivTable, Header, TableStyle } from "./History.style";

export function History() {
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
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 1 mês atrás</td>
                            <td>Conclído</td>
                        </tr>
                        
                    </tbody>  
                </TableStyle> 
            </DivTable> 
        </>
    ) 
}