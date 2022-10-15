import React from 'react'

export default function SelectField({ name, title, a, type, error, array }) {
    return (
        <>

            <label class="block text-gray-700 text-sm text-left font-bold " for={name}>
                {title} {error && <p className="text-sm text-red-500 ">{error}</p>}
            </label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={name}
                    type={type}
                    placeholder={title}
                    {...a}>
                    <option value="">Select...</option>
                    {array && array.length > 0 && array.map((array) => (<option value={array.id}>{array.name}</option>))}
                </select>
        </>
    )
}