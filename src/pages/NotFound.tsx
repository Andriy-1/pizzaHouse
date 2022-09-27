import React from 'react';
//import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
export const NotFound: React.FC = () => {
//   const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       omt: 2400,
// 	  },
// 	  {
//       name: 'Page A',
//       uv: 3000,
//       pv: 2100,
//       omt: 2500,
// 	  },
// 	  {
//       name: 'Page A',
//       uv: 3550,
//       pv: 2700,
//       omt: 2900,
// 	  },
// 	  {
//       name: 'Page A',
//       uv: 4100,
//       pv: 2100,
//       omt: 2000,
//     },
//   ];
  return (
    <div className="cart--empty">
      <h2> 404 <br /> Виникла проблема <span>😕</span> </h2>
			<p>
				Перевірьте URL рядок або
				<br /> повторіть спробу пізніше.
			</p>
      {/* <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart> */}
    </div>
  );
};

export default NotFound;
