import { h } from 'preact';
import { Link } from 'preact-router';

export default function Home({ conferences }) {

    if (!conferences) {
        return <div className="text-center p-3">No conferences yet</div>;
    }

    return (
        <div className="p-3">
            {conferences.map(conference => (
                <div className="card border shadow-sm mb-3 lift">
                    <div className="card-body">
                        <div className="card-title">
                            <h5 className="fw-light">
                                {conference.city} {conference.year}
                            </h5>
                        </div>

                        <Link className="btn btn-sm btn-primary stretched-link" href={'/conference/'+conference.slug}>
                            View
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};