import React from 'react';
import imgTeamIcon from '../images/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg';
const MainSections3 = () => {
    return (

        // link Команда
        <div className="mainSection3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title">Выделенная команда</h1>
                    </div>
                    <div className="col-6">
                        <p className="comandP">Для каждого проекта мы формируем команду, в <br/>
                        которую входят проект менеджер, бизнес-<br/>
                        аналитик, UI/UX дизайнер, DevOps, QA-инженер,<br/>
                        бэкенд и фронтенд разработчики</p>
                        <span className="forty">
                            40
                            <span className="fortyPlus">+</span>
                        </span>
                        <p className="comandP2">
                            Сотрудников
                        </p>
                    </div>
                    <div className="col-6 mb-5">
                        <img src={imgTeamIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSections3;