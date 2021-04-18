import { openModal } from "../../../../base/modal";
import { CreateEditTaskForm } from ".";
import moment from "moment";

export function OpenEditTaskModal(e) {
    const taskId = e.target.dataset.id;

    fetch(`http://localhost:3000/tasks/${taskId}`)
        .then(res => res.json())
        .then(task => {
            const maxDate = new Date(task[0].expirationDate);
            const deadline = moment(maxDate).format('L');
            if (task) {
                openModal({
                    title: 'Edit task',
                    body: CreateEditTaskForm({
                        title: task[0].title,
                        description: task[0].description,
                        status: task[0].status,
                        id: taskId,
                        expirationDate: deadline
                    }),
                    hasFooterCloseButton: false,
                });
            }
        });
}