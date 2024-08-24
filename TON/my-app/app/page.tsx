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

  // const userData = {
  //   id: 123,
  //   first_name: 'john',
  //   last_name: 'doe',
  //   username: 'johndoe',
  //   language_code: 'en',
  //   is_premium: false,
  // }

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as unknown as UserData)
    }
  }, [])


  return (
    <main className="p-4 flex flex-col justify-center items-center text-white bg-black h-[100vh] font-mono">
      {
        userData ? (
          <>
            <h1 className="text-4xl font-bold mb-16">User Data</h1>
            <ul className="flex flex-col gap-4">
              <li>
                ID: {userData.id}
              </li>
              <li> First Name: {userData.first_name}</li>
              <li> Last Name: {userData.last_name}</li>
              <li> Username: {userData.username}</li>
              <li> Language Code: {userData.language_code}</li>
              <li> Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
            </ul>
          </>
        ) : (
          <div>Loading...</div>
        )
      }
    </main>
  );
}
