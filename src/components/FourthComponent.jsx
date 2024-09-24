
export const FourthComponent = () => {
  
  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón " + name);
  }

  const handleDoubleClicked = () => {
    alert("Has hecho doble click en el botón");
  }

  const handleMouseEnter = (e) =>{
    alert("Has ENTRADO a la caja");
  }

  const handleMouseLeave = (e) =>{
    alert("has SALIDO de la caja");
  }

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`);
  }

  const handleInsideInput = (e) =>{
    console.log("Estás dentro del input, escribe tu nombre");
  }

  const handleOutsideInput = (e) =>{
    alert("Estás fuera del input, Adios");
  }
    
  return (
    <div>
        <h1>FourthComponent</h1>
        {/* Evento Click */}
        <button id="UNO" 
            className="btn btn-danger"
            onClick={ () => {
                alert("Hola soy un evento click");
            }}
            >Haz clic !!
        </button>
        <div>
            <button
                className="btn btn-success"
                onClick={e => handleClicked(e, "Nataly")}>
                Aquí también haz click!
            </button>
        </div>
        <div>
            <button className="btn btn-secondary"
                onDoubleClick={ handleDoubleClicked}>
                Haz doble click
            </button>
        </div>
        <div id="box1" 
             onMouseEnter={ e => handleMouseEnter(e)}
             onMouseLeave={ e => handleMouseLeave(e)}
             >
            <p>Pasa el mouse por encima</p>
        </div>
        <div id= "box2" classname="mt-4"
            onMouseEnter={ e => handleMouse(e, "entrado con el mouse a")}
            onMouseLeave={ e => handleMouse(e, "salido con el mouse de")}
        >
        </div>
        <div className="mt-4">
            <input type="text" 
            onFocus={ e => handleInsideInput(e)}
            onBlur={ e => handleOutsideInput(e)}
            />
        </div>
    </div>
  )
}
