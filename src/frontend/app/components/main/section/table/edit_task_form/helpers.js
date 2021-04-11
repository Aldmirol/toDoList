import { openModal } from "../../../../base/modal";
import { CreateEditTaskForm } from ".";

export function OpenEditTaskModal(e) {
    const taskId = e.target.dataset.id;

    fetch(`http://localhost:3000/tasks/${taskId}`)
        .then(res => res.json())
        .then(task => {
            console.log(task);
            if (task) {
                openModal({
                    title: 'Edit task',
                    body: CreateEditTaskForm({
                        title: task[0].title,
                        description: task[0].description,
                        status: task[0].status,
                        id: taskId
                    }),
                    hasFooterCloseButton: false,
                });
            }
        });
}