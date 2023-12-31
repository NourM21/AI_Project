import './ListButtonStyle.css'

const ListButton = () => {
  return (
    <div className='aj-list-button'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 5.33333V8M8 8V10.6667M8 8H10.6667M8 8H5.33333M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <p>and 5 more others</p>
    </div>
  )
}

export default ListButton