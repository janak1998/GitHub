'use client'

import WebApp from "@twa-dev/sdk";
import { useState, useEffect } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}


export default function Home() {

  const [userData, setUserData] = useState<UserData | null>(null);

  const userData2 = {
    id: 123,
    first_name: 'janak',
    last_name: 'bohra',
    username: 'janaxbohra',
    language_code: 'en',
    is_premium: false,
  }

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as unknown as UserData)
    }
  }, [])


  return (
    <main className="p-4 flex flex-col justify-center items-center text-white bg-black h-[100vh] font-mono">
      {
        userData2 ? (
          <>
            <h1 className="text-4xl font-bold mb-16">User Data</h1>
            <ul className="flex flex-col gap-4">
              <li>
                ID: {userData2.id}
              </li>
              <li> First Name: {userData2.first_name}</li>
              <li> Last Name: {userData2.last_name}</li>
              <li> Username: {userData2.username}</li>
              <li> Language Code: {userData2.language_code}</li>
              <li> Is Premium: {userData2.is_premium ? 'Yes' : 'No'}</li>
            </ul>
          </>
        ) : (
          <div>Loading...</div>
        )
      }
    </main>
  );
}
