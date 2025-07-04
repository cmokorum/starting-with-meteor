/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

export const  ErrorAlert = ({ message }) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {message}
          </h3>
        </div>
      </div>
    </div>
  )
}

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};