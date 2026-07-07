export default function FileIntegrityCheckerSEO() {
  return (
    <div className="content-wrapper">
      <section>
        <p>
          Generate a checksum (hash) of any file to confirm it wasn&apos;t
          corrupted during download or transfer, or tampered with along the way.
          If the hash you calculate matches the hash published by the
          file&apos;s source, the file is identical, byte for byte, to the
          original.
        </p>
      </section>

      <section>
        <p>
          Drop a file into the tool above or click to browse for one. Large
          files are streamed in chunks, so there&apos;s no file size limit and
          nothing is ever uploaded anywhere.
        </p>
      </section>

      <section>
        <h2>How to Check File Integrity</h2>
        <ul>
          <li>
            <b>Drop in or browse for your file:</b> <br /> Drag and drop the
            file directly or click to select it from your machine.
          </li>
          <li>
            <b>Pick the algorithm:</b> <br /> Choose SHA-256, SHA-512, or MD5 to
            match the hash you were given.
          </li>
          <li>
            <b>Wait for the hash to generate:</b> <br /> Large files are
            streamed in chunks, so even multi-gigabyte files can be checked
            without running out of memory.
          </li>
          <li>
            <b>Verify against a known hash:</b> <br /> Paste the published hash
            into the verify field to confirm it matches.
          </li>
        </ul>
      </section>

      <section>
        <h2>SHA-256 vs SHA-512 vs MD5</h2>
        <p>
          SHA-256 is the most common choice today for verifying downloads and
          software packages. SHA-512 offers a longer digest for the same family.
          MD5 is faster and still widely used for detecting accidental
          corruption, though it&apos;s not considered cryptographically secure
          against deliberate tampering.
        </p>
      </section>

      <section>
        <h2>Why Use a File Integrity Checker?</h2>
        <ul>
          <li>
            <b>Catch corrupted downloads:</b> <br /> A hash mismatch tells you
            immediately if a download was interrupted or damaged in transit.
          </li>
          <li>
            <b>Detect tampering:</b> <br /> Comparing against a
            publisher-provided hash confirms a file wasn&apos;t altered before
            it reached you.
          </li>
          <li>
            <b>Works on any file size:</b> <br /> Chunked streaming means
            multi-gigabyte files are checked without loading the whole file into
            memory.
          </li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <ul>
          <li>
            <b>Is this tool safe for large or sensitive files?</b> <br /> Yes.
            Everything runs locally in your browser — files are never uploaded
            anywhere.
          </li>
          <li>
            <b>Which algorithm should I use?</b> <br /> Use whichever algorithm
            matches the hash published by the file&apos;s source — SHA-256,
            SHA-512, or MD5.
          </li>
          <li>
            <b>Is there a file size limit?</b> <br /> No. Files are read and
            hashed in chunks, so even very large files can be checked.
          </li>
          <li>
            <b>Is my file sent to a server?</b> <br /> No. All hashing happens
            locally in your browser. Your file never leaves your machine.
          </li>
        </ul>
      </section>
    </div>
  );
}
