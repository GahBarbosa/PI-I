import React from 'react'

type Item = {
  [key: string]: any;
};

type Props = {
  code: string;
  title: string;
  dados: Item[];
};


export default function List({ code, title, dados }: Props) {
  return (
    <div className='flex flex-col'>
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] ">
        {title}
      </h1>
      <div className='grid grid-cols-2'>
        {dados.map((objeto, index) => (
          <ul key={code + '_' + index} style={{ marginBottom: '1rem' }}>
            {Object.entries(objeto).map(([chave, valor]) => (
              <li key={code + '_' + chave}>
                <strong>{chave}:</strong> {String(valor)}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}