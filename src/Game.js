

const Random = () => {
    return (
        <div className='container'>
            <h1 className='random-title'>guess the number in three attempts</h1>
            <div>
                <input type="text" placeholder='enter number' className='random-input'/>
            </div>
            <button className='random-check'>check</button>
            <p className='desk'>you have 3 attempts left</p>
            <button className='random-reverse'>reverse</button>
        </div>
    );
};

export default Random; 