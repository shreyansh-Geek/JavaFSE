import React from 'react';
import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';
import { describe, test, expect } from 'vitest';

describe("Cohort Details Component", () => {
  const mockCohort = CohortData[0];

  test("should create the component", () => {
    const { container } = render(<CohortDetails cohort={mockCohort} />);
    expect(container).toBeDefined();
  });

  test("should initialize the props", () => {
    render(<CohortDetails cohort={mockCohort} />);
    const nameElem = screen.getByText(mockCohort.name);
    expect(nameElem).toBeInTheDocument();
  });

  test("should display cohort code in h3", () => {
    const { container } = render(<CohortDetails cohort={mockCohort} />);
    const h3Elem = container.querySelector('h3');
    expect(h3Elem).toBeInTheDocument();
    expect(h3Elem.textContent).toBe(mockCohort.code);
  });

  test("should always render same html", () => {
    const { asFragment } = render(<CohortDetails cohort={mockCohort} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
