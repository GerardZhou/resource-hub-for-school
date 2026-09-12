import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { courses, filterCourses, subjects } from "../data/courses";
import CourseCard from "./CourseCard";
import styles from "./CourseBrowser.module.css";

export default function CourseBrowser() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = useRef(null);
  const query = searchParams.get("q") || "";
  const requestedSubject = searchParams.get("subject") || "";
  const subject = subjects.includes(requestedSubject) ? requestedSubject : "";
  const results = filterCourses(courses, query, subject);
  const hasFilters = Boolean(query || subject);
  const practiceSearch = new URLSearchParams({ resourceId: "AP Practice Tests" });

  function updateFilter(name, value) {
    const next = new URLSearchParams(searchParams);
    if (requestedSubject && !subjects.includes(requestedSubject)) next.delete("subject");
    if (value) next.set(name, value);
    else next.delete(name);
    setSearchParams(next, { replace: true });
  }

  function clearFilters() {
    const next = new URLSearchParams(searchParams);
    next.delete("q");
    next.delete("subject");
    setSearchParams(next, { replace: true });
    searchInput.current?.focus();
  }

  return (
    <section aria-labelledby="courses-heading">
      <div className={styles.headingRow}>
        <h1 id="courses-heading" className={styles.heading}>AP courses</h1>
        <Link to={`/resources?${practiceSearch}`} className={styles.practiceLink}>
          Practice tests across courses
        </Link>
      </div>
      <form
        role="search"
        aria-label="Find an AP course"
        className={styles.filters}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.field}>
          <label htmlFor="course-search">Search courses</label>
          <input
            ref={searchInput}
            id="course-search"
            name="q"
            type="search"
            value={query}
            onChange={(event) => updateFilter("q", event.target.value)}
            placeholder="Biology, APUSH, Calculus…"
            aria-controls="course-results"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="course-subject">Subject</label>
          <select
            id="course-subject"
            name="subject"
            value={subject}
            onChange={(event) => updateFilter("subject", event.target.value)}
            aria-controls="course-results"
          >
            <option value="">All subjects</option>
            {subjects.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
      </form>
      <div className={styles.resultSummary}>
        <p role="status" aria-live="polite" aria-atomic="true">
          {results.length} {results.length === 1 ? "course" : "courses"}
          {hasFilters ? ` matching your filters · ${courses.length} total` : " available"}
        </p>
        {hasFilters && (
          <button type="button" className={styles.clearButton} onClick={clearFilters}>
            Clear filters
          </button>
        )}
      </div>
      <div id="course-results">
        {results.length ? (
          <ul className={styles.grid}>
            {results.map((course) => <CourseCard key={course.name} course={course} />)}
          </ul>
        ) : (
          <div className={styles.empty}>
            <h2>No courses match those filters</h2>
            <p>Try a shorter course name, choose another subject, or clear your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
