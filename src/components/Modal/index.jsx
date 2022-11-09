import { Modal } from "./style";

const ModalPet = () => {
  return (
    <Modal>
      <div className="modal-container">
        <button className="button-close">Close</button>
        <button className="button-edit">Editar</button>
        <figure>
          <img
            src="https://static4.depositphotos.com/1011434/493/i/600/depositphotos_4939645-stock-photo-cute-puppy.jpg"
            alt=""
          />
        </figure>
        <div>
          <h2>Pitoco</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            earum dolore recusandae quia. Aliquam dolores, necessitatibus ab
            ipsa deleniti sed impedit, natus facere quia nam quasi, voluptatibus
            tenetur fugit non?
          </p>
        </div>

        <div></div>
      </div>
    </Modal>
  );
};

export default ModalPet;
