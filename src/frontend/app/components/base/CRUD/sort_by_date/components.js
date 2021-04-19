import moment from "moment";
import {
    Row
} from "../../../main/section/table/row";

export function SortByDate(e) {
    const sortParam = e.target.dataset.id;

    fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(tasks => {
            const tbody = document.querySelector('tbody');
            const fr = document.createDocumentFragment();

            tbody.innerText = '';

            switch (sortParam) {
                case 'year': {
                    tasks.filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                        .forEach(task => {
                            const maxDate = new Date(task.expirationDate);
                            const deadline = moment(maxDate).format('LL');

                            fr.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }))
                        })
                    tbody.append(fr);

                    break;
                };
            case 'all': {
                tasks.forEach(task => {
                    const maxDate = new Date(task.expirationDate);
                    const deadline = moment(maxDate).format('LL');

                    fr.append(Row({
                        title: task.title,
                        description: task.description,
                        expirationDate: deadline,
                        status: task.status,
                        id: task._id
                    }))
                });
                tbody.append(fr);

                break;
            };
            case 'month': {
                tasks.filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                    .filter(task => new Date(task.expirationDate).getMonth() === new Date().getMonth())
                        .forEach(task => {
                            const maxDate = new Date(task.expirationDate);
                            const deadline = moment(maxDate).format('LL');

                            fr.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }))
                        });
                tbody.append(fr);

                break;
            };
            case 'week': {
                tasks.filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                    .filter(task => moment(new Date(task.expirationDate)).week() === moment(new Date()).week())
                        .forEach(task => {
                            const maxDate = new Date(task.expirationDate);
                            const deadline = moment(maxDate).format('LL');

                            fr.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }));
                        });
                tbody.append(fr);

                break;
            };
            case 'today': {
                tasks.filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                        .filter(task => moment(new Date(task.expirationDate)).dayOfYear() === moment(new Date()).dayOfYear())
                            .forEach(task => {
                                const maxDate = new Date(task.expirationDate);
                                const deadline = moment(maxDate).format('LL');

                                fr.append(Row({
                                    title: task.title,
                                    description: task.description,
                                    expirationDate: deadline,
                                    status: task.status,
                                    id: task._id
                                }));
                            });
                tbody.append(fr);

                break;
            };
            }
        });
}