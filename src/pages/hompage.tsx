import React from 'react'

type Props = {}

const data = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
]
const Hompage = (props: Props) => {
    return (
        <div>

            <div className='grid grid-cols-2'>
                <div><h1 className='flex flex-row'>Store</h1></div>
                <div className="flex flex-row-reverse">
                    <svg className="h-8 w-8 text-black mx-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="9" y1="6" x2="20" y2="6" />  <line x1="9" y1="12" x2="20" y2="12" />  <line x1="9" y1="18" x2="20" y2="18" />  <line x1="5" y1="6" x2="5" y2="6.01" />  <line x1="5" y1="12" x2="5" y2="12.01" />  <line x1="5" y1="18" x2="5" y2="18.01" /></svg>
                    <svg className="h-8 w-8 text-black mx-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
            </div>

            <div className="grid grid-cols-3  ">
                {data.map((row) => (
                    <div className="p-10">
                        <div className="img">
                            <img src={row.image} alt="" />
                        </div>
                        <div className="desc">
                            <h2 className='flex flex-row' >{row.name}</h2>
                            <p className='flex flex-row'>{row.email}</p>
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default Hompage