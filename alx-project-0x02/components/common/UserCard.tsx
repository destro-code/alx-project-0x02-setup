import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  address,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6 bg-slate-200">
        <h3 className="leading-6 text-2xl text-center font-semibold text-gray-900">
          {name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center ">
          @ {username}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {email}
            </dd>
          </div>
          <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {phone}
            </dd>
          </div>
          <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {address.city} {address.street}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserCard;
