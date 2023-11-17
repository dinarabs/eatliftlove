import { Card, CardFooter, Image, CardBody } from '@nextui-org/react'
import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

const CardList = ({ list }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-wrap item-center justify-between p-5 max-w-[1024px] mx-auto">
      {list.map((item, index) => (
        <Card
          className="m-2 bg-gradient-to-br from-[#800080] to-[#6f17b2]"
          shadow="sm"
          key={index}
          isPressable
          onPress={() =>
            setTimeout(() => {
              navigate(item.navLink)
            }, 500)
          }
        >
          <CardBody className="overflow-visible p-0 w-[260px]">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px]"
              src={item.img ? item.img : item.imageUrl}
            />
          </CardBody>
          <CardFooter className="text-small justify-center ">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

CardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      navLink: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default CardList
