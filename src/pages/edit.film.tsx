import EditFilm from '../components/edit/edit.film';

export default function EditCarPage() {
  return (
    <section className="edit-section">
      <div className="edit-container">
        <h1 className="title-edit-page">Edit your car</h1>
        {<EditFilm></EditFilm>}
      </div>
    </section>
  );
}
