import { FaTimes, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p><FaCalendarAlt></FaCalendarAlt> {task.day}</p>

      {task.address ? <p><FaMapMarkerAlt></FaMapMarkerAlt>{task.address}</p> : <p>No Location to show</p>}

    </div>
  )
}

export default Task
