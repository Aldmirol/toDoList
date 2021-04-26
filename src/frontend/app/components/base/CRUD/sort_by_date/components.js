import moment from "moment";
import {
    Row
} from "../../../main/section/table/row";

export function SortByDate(e) {
    const sortParam = e.target.dataset.id;
    const targetButton = e.target.closest("div");
    const currenActiveButton = document.querySelector(`.active-aside-buttons`);
    const currentActiveButtonLightTheme = document.querySelector(".theme-active-aside-buttons-light");
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
        currentActiveButtonLightTheme.classList.remove("theme-active-aside-buttons-light");
        targetButton.classList.add("theme-active-aside-buttons-light");
    } else {
        currenActiveButton.classList.remove("active-aside-buttons");
        targetButton.classList.add("active-aside-buttons");
    }

    fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(tasks => {
            const tbody = document.querySelector('tbody');
            const allStatusExeptDoneEl = document.createDocumentFragment();
            const doneStatusEl = document.createDocumentFragment();
            const userId = localStorage.getItem('data-id');

            tbody.innerText = '';

            switch (sortParam) {
                case 'year': {
                    tasks.filter(task => task.userId === userId)
                        .filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                        .forEach(task => {
                            const maxDate = new Date(task.expirationDate);
                            const deadline = moment(maxDate).format('LL');

                            if (task.status === "done") {
                                doneStatusEl.append(Row({
                                    title: task.title,
                                    description: task.description,
                                    expirationDate: deadline,
                                    status: task.status,
                                    id: task._id,
                                    hasDoneStatus: true
                                }))
                            } else {
                                allStatusExeptDoneEl.append(Row({
                                    title: task.title,
                                    description: task.description,
                                    expirationDate: deadline,
                                    status: task.status,
                                    id: task._id
                                }))
                            }
                        })
                    tbody.append(allStatusExeptDoneEl, doneStatusEl);

                    break;
                };
            case 'all': {
                tasks.filter(task => task.userId === userId)
                .forEach(task => {
                    const maxDate = new Date(task.expirationDate);
                    const deadline = moment(maxDate).format('LL');

                    if (task.status === "done") {
                        doneStatusEl.append(Row({
                            title: task.title,
                            description: task.description,
                            expirationDate: deadline,
                            status: task.status,
                            id: task._id,
                            hasDoneStatus: true
                        }))
                    } else {
                        allStatusExeptDoneEl.append(Row({
                            title: task.title,
                            description: task.description,
                            expirationDate: deadline,
                            status: task.status,
                            id: task._id
                        }))
                    }
                })
                tbody.append(allStatusExeptDoneEl, doneStatusEl);

                break;
            };
            case 'month': {
                tasks.filter(task => task.userId === userId)
                    .filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                    .filter(task => new Date(task.expirationDate).getMonth() === new Date().getMonth())
                    .forEach(task => {
                        const maxDate = new Date(task.expirationDate);
                        const deadline = moment(maxDate).format('LL');

                        if (task.status === "done") {
                            doneStatusEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id,
                                hasDoneStatus: true
                            }))
                        } else {
                            allStatusExeptDoneEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }))
                        }
                    })
                tbody.append(allStatusExeptDoneEl, doneStatusEl);

                break;
            };
            case 'week': {
                tasks.filter(task => task.userId === userId)
                    .filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                    .filter(task => new Date(task.expirationDate).getMonth() === new Date().getMonth())
                    .filter(task => moment(new Date(task.expirationDate)).isoWeek() === moment(new Date()).isoWeek())
                    .forEach(task => {
                        const maxDate = new Date(task.expirationDate);
                        const deadline = moment(maxDate).format('LL');

                        if (task.status === "done") {
                            doneStatusEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id,
                                hasDoneStatus: true
                            }))
                        } else {
                            allStatusExeptDoneEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }))
                        }
                    })
                tbody.append(allStatusExeptDoneEl, doneStatusEl);
                break;
            };
            case 'today': {
                tasks.filter(task => task.userId === userId)
                    .filter(task => new Date(task.expirationDate).getFullYear() === new Date().getFullYear())
                    .filter(task => moment(new Date(task.expirationDate)).dayOfYear() === moment(new Date()).dayOfYear())
                    .forEach(task => {
                        const maxDate = new Date(task.expirationDate);
                        const deadline = moment(maxDate).format('LL');

                        if (task.status === "done") {
                            doneStatusEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id,
                                hasDoneStatus: true
                            }))
                        } else {
                            allStatusExeptDoneEl.append(Row({
                                title: task.title,
                                description: task.description,
                                expirationDate: deadline,
                                status: task.status,
                                id: task._id
                            }))
                        }
                    })
                tbody.append(allStatusExeptDoneEl, doneStatusEl);

                break;
            };
            }
        });
}