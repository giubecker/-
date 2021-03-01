import React from 'react';
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import './Library.css';
import { ScrollPanel } from "primereact/scrollpanel";
import {Card} from 'primereact/card';
import Capa from '../../assets/capa.png';

export const Library = () => {

    const header = <img alt="Card" src={Capa}  style={{ width: "200px", height: "200px" }}/>;
    const title = <span>
Título do video
             </span>;
const footer = <span>
Descrição do video
             </span>;

    return (
        <>
            <Sidebar/>
                <div className='container'>
           
            <div className='box'>
            <p>AGENDAMENTOS</p>
            <br/>
            <div className="row">
          <div className="library-container">
          <br/>
            Videos
              <ScrollPanel
                style={{ width: "100%", height: "250px" }}
                className="custom"
              >

              <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  {title}
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                            {title}
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                            {title}
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

              </ScrollPanel>
          </div>

          <div className="library-container">
          <br/>
            Receitas
            <ScrollPanel
                style={{ width: "100%", height: "250px" }}
                className="custom"
              >


              <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

              </ScrollPanel>
          </div>

          <div className="library-container">
          <br/>
            Leituras Recomendadas
            <ScrollPanel
                style={{ width: "100%", height: "250px" }}
                className="custom"
              >


              <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

              </ScrollPanel>
          </div>

          <div className="library-container">
          <br/>
            Guias Visuais
            <ScrollPanel
                style={{ width: "100%", height: "250px" }}
                className="custom"
              >


              <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='values'>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                            <div className='value'>
                            <Card footer={footer} header={header}>
                  Título do vídeo
                </Card>
                            </div>
                        </div>
                    </div>

              </ScrollPanel>
          </div>
        </div>
            </div>

        </div>
        </>
    )
}
export default Library;