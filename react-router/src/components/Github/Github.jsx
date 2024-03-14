import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function Github() {
  const profile =useLoaderData()
 /*  const [profile, setProfile] = useState({});
 */
  /* useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); */

  return (
    <div className="m-10 bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800"><FaGithub className="text-gray-600" /></h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <img src={profile.avatar_url} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          
        </div>
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-gray-600">@{profile.login}</p>
        </div>
      </div>
      <p className="text-lg font-semibold mb-2">Bio:</p>
      <p className="text-gray-700 mb-4">{profile.bio}</p>
      <p className="text-lg font-semibold mb-2">Location:</p>
      <p className="text-gray-700 mb-4">{profile.location}</p>
      <p className="text-lg font-semibold mb-2">Followers:</p>
      <p className="text-gray-700 mb-4">{profile.followers}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Profile</a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async ()=>{
  const res = await fetch('https://api.github.com/users/pixperk')
  return res.json()
}
