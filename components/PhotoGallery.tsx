'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import EventFilterChips from "@/components/EventFilterChips";
import type { PastEvent } from "@/lib/pastEvents";
import styles from "./PhotoGallery.module.css";

interface PhotoGalleryProps {
  events: PastEvent[];
}

const PhotoGallery = ({ events }: PhotoGalleryProps) => {
  const [selectedId, setSelectedId] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const selectedEvent = events.find((e) => e.id === selectedId);

  const photos = useMemo(
    () =>
      (selectedEvent ? [selectedEvent] : events).flatMap((event) =>
        event.photos.map((photo) => ({
          ...photo,
          eventTitle: event.title,
          alt: photo.altText ?? photo.caption ?? `${event.title} photo`,
        }))
      ),
    [events, selectedEvent]
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setOpenIndex(null);
    stripRef.current?.scrollTo({ left: 0 });
  };

  const scrollStrip = (direction: 1 | -1) => {
    const strip = stripRef.current;
    if (strip) strip.scrollBy({ left: direction * strip.clientWidth * 0.9, behavior: "smooth" });
  };

  const step = useCallback(
    (direction: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + direction + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, step]);

  if (!events.some((e) => e.photos.length > 0)) return null;

  const openPhoto = openIndex !== null ? photos[openIndex] : null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Photo Gallery</h2>
      <EventFilterChips events={events} selectedId={selectedId} onSelect={handleSelect} />

      {selectedEvent?.description && (
        <p className={styles.eventDescription}>{selectedEvent.description}</p>
      )}

      {photos.length === 0 ? (
        <p className={styles.empty}>No photos yet.</p>
      ) : (
        <div className={styles.stripWrapper}>
          <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={() => scrollStrip(-1)} aria-label="Scroll photos left">
            <FiChevronLeft size={28} />
          </button>
          <div className={styles.strip} ref={stripRef}>
            {photos.map((photo, index) => (
              <button
                type="button"
                key={`${selectedId}-${photo.id}`}
                className={styles.tile}
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${photo.alt}`}
              >
                <Image src={photo.url} alt={photo.alt} fill sizes="(max-width: 720px) 80vw, 400px" />
              </button>
            ))}
          </div>
          <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={() => scrollStrip(1)} aria-label="Scroll photos right">
            <FiChevronRight size={28} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {openPhoto && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={openPhoto.alt}
            onClick={() => setOpenIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button type="button" className={styles.close} onClick={() => setOpenIndex(null)} aria-label="Close">
              <FiX size={30} />
            </button>
            <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxImage}>
                <Image src={openPhoto.url} alt={openPhoto.alt} fill sizes="90vw" />
              </div>
              <figcaption className={styles.figcaption}>
                <span className={styles.eventTag}>{openPhoto.eventTitle}</span>
                {openPhoto.caption && <span>{openPhoto.caption}</span>}
              </figcaption>
            </figure>
            {photos.length > 1 && (
              <>
                <button type="button" className={`${styles.lightboxArrow} ${styles.left}`} onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">
                  <FiChevronLeft size={36} />
                </button>
                <button type="button" className={`${styles.lightboxArrow} ${styles.right}`} onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">
                  <FiChevronRight size={36} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
