export default function Comments() {
    return (
        <div>
            <h3>Comments</h3>
            <div className="flex gap-2 mt-3 mb-6">
                <input className="Form-Field flex-1 px-[1em] bg-surface-10 bg-opacity-80 rounded-[3em]" placeholder="Comments" />
                <button className="btn-primary rounded-[2em] px-[1em]">Send</button>
            </div>
            <p className="border-y p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="border-y p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}