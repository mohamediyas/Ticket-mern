import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import NoteItem from "../components/NoteItem";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  getNotes,
  createNote,
  reset as notesReset,
} from "../features/notes/notesSlice";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const { ticketId } = useParams();

  console.log(ticketId);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    closeModel();
  };

  const openModel = () => {
    setModalIsOpen(true);
  };

  const closeModel = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "Something Went wrong";
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          {" "}
          Ticket Id : {ticket?.ticket?._id}
          <span className={`status status-${ticket.ticket?.status}`}>
            {ticket.ticket?.status}
          </span>
        </h2>
        <h3>
          Date Submitted:{" "}
          {new Date(ticket.ticket?.createdAt).toLocaleString("en-US")}
        </h3>
        <h3>Products: {ticket.ticket?.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue </h3>
          <p>{ticket.ticket?.description}</p>
        </div>
        <h2>Notes </h2>
      </header>
      {ticket.status !== "closed" && (
        <button onClick={openModel} className="btn">
          <FaPlus /> Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModel}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Add Note</h2>
        <button className="btn-close" onClick={closeModel}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textPath
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textPath>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}

      {ticket.ticket?.status != "closed" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Clost Ticket
        </button>
      )}
    </div>
  );
};

export default Ticket;
