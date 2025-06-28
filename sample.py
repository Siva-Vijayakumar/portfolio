import streamlit as st
import pandas as pd
from datetime import datetime, timedelta

# Initialize or load schedule
def load_schedule():
    days = [f"Day {i+1}" for i in range(30)]
    start_date = datetime.today()
    dates = [(start_date + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(30)]
    schedule = [
        ("09:00 AM - 09:45 AM", "Aptitude Learning"),
        ("09:45 AM - 10:10 AM", "Aptitude Practice"),
        ("10:10 AM - 10:40 AM", "System Design / OOPs"),
        ("10:40 AM - 11:10 AM", "SQL Practice"),
        ("11:10 AM - 11:40 AM", "Communication Practice"),
        ("05:00 PM - 06:00 PM", "Coding Practice")
    ]

    rows = []
    for date, day in zip(dates, days):
        for time_slot, task in schedule:
            rows.append({
                "Date": date,
                "Day": day,
                "Time Slot": time_slot,
                "Task": task,
                "Completed": False
            })
    return pd.DataFrame(rows)

# Load the schedule into session state if not already present
if "schedule" not in st.session_state:
    st.session_state.schedule = load_schedule()

st.title("📅 TCS NQT 30-Day Study Tracker")
st.write("Mark your progress for each study block.")

# Select a specific day
selected_day = st.selectbox("Select Day", sorted(st.session_state.schedule['Day'].unique()))
day_df = st.session_state.schedule[st.session_state.schedule['Day'] == selected_day]

# Display tasks for the selected day
updated = False
for i, row in day_df.iterrows():
    key = f"{row['Day']}-{row['Time Slot']}"
    checked = st.checkbox(f"{row['Time Slot']} - {row['Task']}", value=row['Completed'], key=key)
    if checked != row['Completed']:
        st.session_state.schedule.at[i, 'Completed'] = checked
        updated = True

if updated:
    st.success("Progress updated successfully!")

# Show progress summary
st.subheader("📊 Progress Summary")
completed_count = st.session_state.schedule['Completed'].sum()
total_tasks = len(st.session_state.schedule)
st.progress(completed_count / total_tasks)
st.write(f"**{completed_count}** out of **{total_tasks}** tasks completed ✅")
