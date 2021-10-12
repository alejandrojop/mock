import { FC, useState } from 'react';

import './styles.css';

interface InputTemperatureProps {
  onChangeHandler: (value: string) => void;
  value: string;
}

const InputTemperature: FC<InputTemperatureProps> = ({
  onChangeHandler,
  value,
}) => {
  return (
    <input value={value} onChange={(e) => onChangeHandler(e.target.value)} />
  );
};

export const Calculator: FC = () => {
  const [valor, setValor] = useState('');

  const handleChange = (value: string) => {
    setValor(value);
  };

  return (
    <>
      <InputTemperature value={valor} onChangeHandler={handleChange} />
      <h3>{valor}</h3>
    </>
  );
};

// interface ChildComponentProps {
//   rightComponent: ComponentType;
//   leftComponent: ComponentType;
// }

// const ChildComponent: FC<ChildComponentProps> = ({
//   rightComponent: RightComponent,
//   leftComponent: LeftComponent,
// }) => {
//   return (
//     <>
//       <div>
//         <RightComponent />
//       </div>
//       <div>
//         <LeftComponent />
//       </div>
//     </>
//   );
// };

// const RightComponent = () => {
//   return <div>Right Component</div>;
// };

// const LeftComponent = () => {
//   return <div>Left Component</div>;
// };

// const TopComponent = () => {
//   return <div>Top Component</div>;
// };

// const BottomComponent = () => {
//   return <div>Bottom Component</div>;
// };

// const App = () => {
//   return (
//     <>
//       <ChildComponent
//         rightComponent={RightComponent}
//         leftComponent={LeftComponent}
//       />
//       <ChildComponent
//         rightComponent={TopComponent}
//         leftComponent={BottomComponent}
//       />
//       <Calculator />
//     </>
//   );
// };

// export default App;
