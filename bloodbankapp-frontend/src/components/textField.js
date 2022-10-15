import React from 'react'

export default function TextField({ name, title, a, type, error }) {
    return (
        <>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm text-left font-bold mb-2" for={name}>
                    {title} {error && <p className="text-sm text-red-500 ">{error}</p>}
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={name}
                    type={type}
                    placeholder={title}
                    {...a}
                />
            </div>
        </>
    )
}
