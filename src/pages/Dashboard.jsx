import { useEffect, useState } from 'react';
import { Linechart, Barchart, Areachart } from '../components';

export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="py-20 grid gap-20 grid-cols-1">
      <div>
        <h2 className="text-3xl text-center mb-10 text-[#2EB086]">Month Wise Sell</h2>
        <Linechart data={data} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl text-center mb-10">
            <span className="text-[#874356]">Investment</span> vs{' '}
            <span className="text-[#E45826]">Revenue</span>
          </h2>
          <Barchart data={data} />
        </div>
        <div>
          <h2 className="text-3xl text-center mb-10">
            <span className="text-[#8E05C2]">Investment</span> vs{' '}
            <span className="text-[#4E9F3D]">Revenue</span> vs{' '}
            <span className="text-[#000000]">Sell</span>
          </h2>
          <Areachart data={data} />
        </div>
      </div>
    </div>
  );
};
