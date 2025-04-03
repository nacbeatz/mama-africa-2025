import React from 'react'

function Offer() {
  return (
    <div>
      return (
      <div className="grid grid-cols-3 gap-4">
        <Offer
          title="Self Guide"
          description="We offer a self-guide option that empowers you to navigate our platform at your own pace."
          icon={<i className="fas fa-user-alt text-green-500 text-2xl"></i>}
        />
        <Offer
          title="Best Services"
          description="We offer relaxation services with skilled staff and top-notch equipment for an unforgettable safari experience."
          icon={<i className="fas fa-spa text-green-500 text-2xl"></i>}
        />
        <Offer
          title="Affordable Prices"
          description="Our offers are affordable travel without compromising adventure. Explore nature's wonders without breaking the bank."
          icon={<i className="fas fa-dollar-sign text-green-500 text-2xl"></i>}
        />
      </div>
      );
    </div>
  )
}

export default Offer
