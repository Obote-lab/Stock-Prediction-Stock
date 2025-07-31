import React from 'react'
import Buttons from './Buttons'

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light">
            This Stock Prediction application utilizes Machine Learning
            techniques, especially Keras and LSTM model, intergrated with Django
            Framework.It Forecasts future stock prices by analyzing 100-day and
            200-day moving averages, eseential indicators widely used by staock
            analysisThis Stock Prediction application utilizes Machine Learning
            techniques, especially Keras and the LSTM model, integrated with the
            Django Framework. It forecasts future stock prices by analyzing
            100-day and 200-day moving averages, essential indicators widely
            used by stock analysts, to inform trading and investments decisions.
          </p>

          <Buttons text="Login" class="btn-outline-info" />
        </div>
      </div>   
    </>
  );
}

export default Main
