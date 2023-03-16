import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function InvestmentInformation(props) {
  const canvasRef = useRef(null);
  const canvasRef1 = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { name, amountInvested, currentValue, projectedReturns } = props;

    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }

    lineChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Amount Invested', 'Current Value', 'Projected Returns'],
        datasets: [
          {
            label: 'Investment Information',
            data: [amountInvested, currentValue, projectedReturns],
            backgroundColor: 'rgb(62, 84, 172)',
            borderColor: 'rgb(62, 84, 172)',
            borderWidth: 1,
            pointRadius: 3,
            pointBackgroundColor: 'rgb(191, 172, 226)',
            pointBorderColor: '#fff',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHitRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    const canvas1 = canvasRef1.current;
    const ctx1 = canvas1.getContext('2d');

    if (barChartRef.current) {
      barChartRef.current.destroy();
    }

    barChartRef.current = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Amount Invested', 'Current Value', 'Projected Returns'],
        datasets: [
          {
            label: 'Investment Information',
            data: [amountInvested, currentValue, projectedReturns],
            backgroundColor: 'rgb(62, 84, 172)',
            borderColor: 'rgb(62, 84, 172)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [props]);

  return (
    
      <div className="row">

      <div className="card mx-5 my-2 col-md-5">
        <canvas ref={canvasRef} />
      </div>

      <div className="card mx-5 my-2 col-md-5">
        <canvas ref={canvasRef1} />
      </div>
      </div>
  
  );
}

export default InvestmentInformation;
