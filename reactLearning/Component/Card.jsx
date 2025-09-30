function Card(props = {}) {
    return (
        <div className={props.cl}>
            <img src="https://images.pexels.com/photos/33728147/pexels-photo-33728147/free-photo-of-elegant-european-architecture-with-evening-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="random image" />
            <p>my image is posted here</p>
        </div >
    )
};
export default Card;