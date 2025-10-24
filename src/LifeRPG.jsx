import React from 'react';

const LifeRPG = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Life RPG</h1>
      <img src="/assets/silhouette.png" alt="silhouette" width="200" />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
        <img src="/assets/weapon_common.png" alt="common weapon" width="64" />
        <img src="/assets/weapon_rare.png" alt="rare weapon" width="64" />
      </div>
    </div>
  );
};

export default LifeRPG;